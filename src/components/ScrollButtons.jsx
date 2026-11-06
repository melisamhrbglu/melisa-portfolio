import { useEffect, useState } from "react";

function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-buttons ${showButtons ? "show" : ""}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top" title="Go to top">
        <svg
          className="scroll-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 5L5 12M12 5L19 12M12 5V20" />
        </svg>
      </button>

      <button
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        title="Go to bottom"
      >
        <svg
          className="scroll-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 19L5 12M12 19L19 12M12 19V4" />
        </svg>
      </button>
    </div>
  );
}

export default ScrollButtons;