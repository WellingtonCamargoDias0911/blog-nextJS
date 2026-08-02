import clsx from 'clsx';

type SpinLoadderProps = {
  className?: string;
};

export function SpinLoader({ className = '' }: SpinLoadderProps) {
  return (
    <div className={clsx('flex', 'items-center', 'justify-center', className)}>
      <div
        className={clsx(
          'w-10',
          'h-10',
          'border-5',
          'border-t-transparent',
          'border-red-500',
          'border-slate-900',
          'rounded-full',
          'animate-spin',
        )}
      ></div>
    </div>
  );
}
