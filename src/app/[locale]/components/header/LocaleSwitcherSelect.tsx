'use client';
import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative flex items-center px-3 py-2 bg-gray-50 rounded-md border border-iguazu-teal transition-colors duration-200 min-w-[120px] cursor-pointer',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="bg-transparent border-none outline-none flex-1 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
        
      </select>
      {/* Dropdown arrow 
      <svg
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 transition-transform duration-200 ${isPending ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      
      */}
        

    </label>
  );
}
