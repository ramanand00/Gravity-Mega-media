import { useEffect } from 'react';

const AdSense = ({
  client = 'ca-pub-2037031298655823',
  slot = '',
  style = { display: 'block' },
  format = 'auto',
  responsive = true,
  className = ''
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('AdSense push failed or script not loaded yet', e);
    }
  }, [slot]);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  );
};

export default AdSense;
