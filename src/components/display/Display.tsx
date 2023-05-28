/**
 * Display provided value in decorated container.
 */

import "./Dislay.css";

type DisplayProps = {
  displayed: string;
};

function Display({ displayed }: DisplayProps) {
  return (
    <section className="display" aria-label="Display" aria-live="polite">
      {displayed}
    </section>
  );
}

export default Display;
