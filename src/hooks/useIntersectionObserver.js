import { useState, useEffect } from 'react';

function useIntersectionObserver(elementRef, { threshold, root, rootMargin, freezeOnceVisible }) {
  const [entry, setEntry] = useState();

  const isFrozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]) => setEntry(entry);

  useEffect(() => {
    const node = elementRef?.current;
    const isIOSupported = !!window.IntersectionObserver;

    if (!isIOSupported || isFrozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, isFrozen]);

  return entry;
}

export default useIntersectionObserver;
