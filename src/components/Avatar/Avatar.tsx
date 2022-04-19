import { PersonIcon } from '@radix-ui/react-icons';
import { isNil } from 'lodash';
import { useState } from 'react';

export default function Avatar({ src, name }: { src?: string; name?: string }) {
  const [hasError, setError] = useState(false);

  if (isNil(src) || hasError) {
    return (
      <div className="br-100 bg-gray w25 h25 flex items-center justify-center">
        <PersonIcon className="w15 h15" />
      </div>
    );
  }

  return (
    <div className="br-100 bg-gray w25 h25 overflow-hidden">
      <img src={src} alt={name} onError={() => setError(true)} />
    </div>
  );
}
