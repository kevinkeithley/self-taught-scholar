import type { APIRoute } from "astro";

const BUTTONDOWN_API = "https://api.buttondown.email/v1/subscribers";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    // Accept normal form posts
    if (!contentType.includes("application/x-www-form-urlencoded") && !contentType.includes("multipart/form-data")) {
      return redirect("/subscribe/error?reason=api", 303);
    }

    const formData = await request.formData();
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const interests = formData.getAll("interests").map((v) => String(v));

    if (!email) return redirect("/subscribe/error?reason=invalid_email", 303);

    const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
    if (!apiKey) return redirect("/subscribe/error?reason=api", 303);

    const payload = {
      email_address: email,
      // if you're using tags in Buttondown, keep this; otherwise you can omit
      tags: interests.length ? interests : undefined,
    };

    const res = await fetch(BUTTONDOWN_API, {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Success
    if (res.ok) return redirect("/subscribe/success", 303);

    // Buttondown returns JSON errors; we’ll map common ones.
    const text = await res.text();

    // Treat "already subscribed" as success UX
    if (res.status === 400 || res.status === 409 || res.status === 422) {
      if (text.toLowerCase().includes("already") || text.toLowerCase().includes("exists")) {
        return redirect("/subscribe/success", 303);
      }
    }

    console.warn("Buttondown subscribe failed:", res.status, text);
    return redirect("/subscribe/error?reason=api", 303);
  } catch (err) {
    console.error("Subscribe route error:", err);
    return redirect("/subscribe/error?reason=api", 303);
  }
};
