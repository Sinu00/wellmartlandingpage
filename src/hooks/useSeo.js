import { useEffect } from 'react';
import { applySeo, clubJsonLd, clubUrl } from '../seo';

export default function useSeo({ title, description, index = false, club = false }) {
  useEffect(() => {
    applySeo({
      title,
      description,
      index,
      url: club ? clubUrl() : `${window.location.origin}${window.location.pathname}${window.location.hash}`,
      jsonLd: club ? clubJsonLd() : null,
    });
  }, [title, description, index, club]);
}
