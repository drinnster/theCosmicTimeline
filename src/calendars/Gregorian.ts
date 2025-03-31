// components/GregorianCalendar.tsx
import { yearsAgoFromBigBang } from '../calendars/utils/dateUtils';

const GregorianCalendar = () => {
  const yearsAgo = yearsAgoFromBigBang(2025);
  return (
    <div>
      <p>{yearsAgo}</p>
    </div>
  );
};