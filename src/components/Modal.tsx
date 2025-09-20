import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";

interface ModalProps {
  imageUrls: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({
  imageUrls,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const hasMultiple = imageUrls.length > 1;
  const touchStartX = useRef<number | null>(null);
  const [swiping, setSwiping] = useState(false);

  // ✅ Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) onPrev();
      if (e.key === "ArrowRight" && hasMultiple) onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext, hasMultiple]);

  // ✅ Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setSwiping(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext(); // swipe left → next
      else onPrev(); // swipe right → prev
    }

    touchStartX.current = null;
    setSwiping(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={imageUrls[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`modal-image ${swiping ? "swiping" : ""}`}
        />

        {/* Navigation Arrows */}
        {hasMultiple && (
          <>
            <button
              className="modal-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              ‹
            </button>
            <button
              className="modal-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Close button */}
        <button
          className="modal-close"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
