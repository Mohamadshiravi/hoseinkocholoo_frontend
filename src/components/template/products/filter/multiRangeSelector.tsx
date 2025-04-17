"use client";

import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  ChangeEvent,
} from "react";

type MultiRangeSliderProps = {
  min: number;
  max: number;
  onChange: (value: { min: number; max: number }) => void;
};

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = React.memo(
  ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);

    const minValRef = useRef<HTMLInputElement | null>(null);
    const maxValRef = useRef<HTMLInputElement | null>(null);
    const range = useRef<HTMLDivElement | null>(null);
    const isFirstInteraction = useRef(true); // ✅

    useEffect(() => {
      setMinVal(min);
      setMaxVal(max);
      isFirstInteraction.current = true; // ✅ ریست کردن بعد از تغییر propها
    }, [min, max]);

    const getPercent = useCallback(
      (value: number) => Math.round(((value - min) / (max - min)) * 100),
      [min, max]
    );

    useEffect(() => {
      if (minVal !== null && maxVal !== null) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
    }, [minVal, maxVal, getPercent]);

    // ✅ فقط زمانی که کاربر اسلایدر رو تغییر داد
    useEffect(() => {
      if (isFirstInteraction.current) {
        isFirstInteraction.current = false;
        return;
      }

      const timeout = setTimeout(() => {
        onChange({ min: minVal, max: maxVal });
      }, 200);

      return () => clearTimeout(timeout);
    }, [minVal, maxVal]);

    return (
      <div className="relative">
        <input
          className="range"
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
        />
        <input
          className="range"
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
        />

        <section className="flex flex-col gap-1 mt-6 text-sm">
          <p className="font-bold text-zinc-800">
            از {minVal?.toLocaleString()} تومان
          </p>
          <p className="font-bold text-zinc-800">
            تا {maxVal?.toLocaleString()} تومان
          </p>
        </section>
      </div>
    );
  }
);

export default MultiRangeSlider;
