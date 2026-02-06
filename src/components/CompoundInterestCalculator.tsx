import { useState, useMemo } from 'react';

function calculateCompoundInterest(principal: number, rate: number, years: number): number {
  return principal * Math.pow(1 + rate / 100, years);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

interface BarProps {
  label: string;
  value: number;
  maxValue: number;
  principal: number;
  color: string;
}

function GrowthBar({ label, value, maxValue, principal, color }: BarProps) {
  const percentage = (value / maxValue) * 100;
  const principalPercentage = (principal / maxValue) * 100;
  const interestEarned = value - principal;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-[var(--color-text)]">{label}</span>
        <span className="font-semibold text-[var(--color-text)]">{formatCurrency(value)}</span>
      </div>
      <div className="h-8 bg-[var(--color-bg-subtle)] rounded-md overflow-hidden relative">
        <div
          className="h-full rounded-md transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
        <div
          className="absolute top-0 left-0 h-full border-r-2 border-dashed border-[var(--color-text-muted)] opacity-50"
          style={{ width: `${principalPercentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
        <span>Principal: {formatCurrency(principal)}</span>
        <span>Interest: {formatCurrency(interestEarned)}</span>
      </div>
    </div>
  );
}

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}

function Slider({ label, value, min, max, step, unit, onChange }: SliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium text-[var(--color-text)]">{label}</label>
        <span className="text-sm font-semibold text-[var(--color-accent)]">
          {unit === '$' ? formatCurrency(value) : `${value}${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-[var(--color-bg-subtle)] rounded-lg appearance-none cursor-pointer accent-[var(--color-accent)]"
      />
      <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
        <span>{unit === '$' ? formatCurrency(min) : `${min}${unit}`}</span>
        <span>{unit === '$' ? formatCurrency(max) : `${max}${unit}`}</span>
      </div>
    </div>
  );
}

type ComparisonMode = 'time' | 'rate' | 'principal';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(30);
  const [mode, setMode] = useState<ComparisonMode>('time');

  const scenarios = useMemo(() => {
    if (mode === 'time') {
      return [
        { label: `${years - 10} years`, value: calculateCompoundInterest(principal, rate, years - 10), principal, color: '#94a3b8' },
        { label: `${years} years`, value: calculateCompoundInterest(principal, rate, years), principal, color: '#3b82f6' },
        { label: `${years + 10} years`, value: calculateCompoundInterest(principal, rate, years + 10), principal, color: '#22c55e' },
      ];
    } else if (mode === 'rate') {
      return [
        { label: `${rate - 2}% rate`, value: calculateCompoundInterest(principal, rate - 2, years), principal, color: '#94a3b8' },
        { label: `${rate}% rate`, value: calculateCompoundInterest(principal, rate, years), principal, color: '#3b82f6' },
        { label: `${rate + 2}% rate`, value: calculateCompoundInterest(principal, rate + 2, years), principal, color: '#22c55e' },
      ];
    } else {
      const halfPrincipal = principal / 2;
      const doublePrincipal = principal * 2;
      return [
        { label: formatCurrency(halfPrincipal), value: calculateCompoundInterest(halfPrincipal, rate, years), principal: halfPrincipal, color: '#94a3b8' },
        { label: formatCurrency(principal), value: calculateCompoundInterest(principal, rate, years), principal, color: '#3b82f6' },
        { label: formatCurrency(doublePrincipal), value: calculateCompoundInterest(doublePrincipal, rate, years), principal: doublePrincipal, color: '#22c55e' },
      ];
    }
  }, [principal, rate, years, mode]);

  const maxValue = Math.max(...scenarios.map(s => s.value));

  const insight = useMemo(() => {
    if (mode === 'time') {
      const diff = scenarios[2].value - scenarios[0].value;
      return `Adding 20 years grows your money by ${formatCurrency(diff)} more — that's the power of time.`;
    } else if (mode === 'rate') {
      const ratio = scenarios[2].value / scenarios[0].value;
      return `A 4% rate difference means ${ratio.toFixed(1)}x more money over ${years} years.`;
    } else {
      const growthMultiple = scenarios[0].value / scenarios[0].principal;
      return `Same growth rate (${growthMultiple.toFixed(1)}x) regardless of starting amount — but starting with more means earning more.`;
    }
  }, [scenarios, mode, years]);

  return (
    <div className="my-8 p-6 bg-[var(--color-bg-subtle)] rounded-lg border border-[var(--color-border)]">
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">
        Interactive Compound Interest Calculator
      </h3>

      {/* Controls */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Slider
          label="Starting Amount"
          value={principal}
          min={1000}
          max={100000}
          step={1000}
          unit="$"
          onChange={setPrincipal}
        />
        <Slider
          label="Annual Return"
          value={rate}
          min={3}
          max={12}
          step={0.5}
          unit="%"
          onChange={setRate}
        />
        <Slider
          label="Time Period"
          value={years}
          min={10}
          max={50}
          step={5}
          unit=" years"
          onChange={setYears}
        />
      </div>

      {/* Mode Selector */}
      <div className="mb-6">
        <p className="text-sm text-[var(--color-text-muted)] mb-3">Compare by:</p>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'time' as const, label: 'Time (±10 years)' },
            { id: 'rate' as const, label: 'Rate (±2%)' },
            { id: 'principal' as const, label: 'Starting Amount' },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setMode(option.id)}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                mode === option.id
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4 mb-6">
        {scenarios.map((scenario, index) => (
          <GrowthBar
            key={index}
            label={scenario.label}
            value={scenario.value}
            maxValue={maxValue}
            principal={scenario.principal}
            color={scenario.color}
          />
        ))}
      </div>

      {/* Insight */}
      <div className="p-4 bg-[var(--color-surface)] rounded-md border-l-4 border-[var(--color-accent)]">
        <p className="text-sm text-[var(--color-text)]">
          <strong>Key insight:</strong> {insight}
        </p>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 border-r-2 border-dashed border-[var(--color-text-muted)] opacity-50"></span>
          Dashed line = principal
        </span>
        <span>Colored bar = total (principal + interest)</span>
      </div>
    </div>
  );
}
