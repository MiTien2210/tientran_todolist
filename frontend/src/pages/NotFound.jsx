const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F5F3FF] flex flex-col items-center justify-center px-4 font-sans">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-violet-100 px-12 py-14 flex flex-col items-center max-w-md w-full text-center">
        {/* Illustration */}
        <div className="relative mb-8">
          <div className="w-28 h-28 rounded-full bg-violet-100 flex items-center justify-center">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="28" fill="#EDE9FE" />
              <path
                d="M18 22C18 19.8 19.8 18 22 18H34C36.2 18 38 19.8 38 22V34C38 36.2 36.2 38 34 38H22C19.8 38 18 36.2 18 34V22Z"
                fill="#7C3AED"
                opacity="0.15"
              />
              <path
                d="M24 28H28M28 28H32M28 28V24M28 28V32"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="28"
                cy="28"
                r="10"
                stroke="#7C3AED"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />
            </svg>
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-violet-300" />
          <div className="absolute -bottom-1 -left-2 w-2.5 h-2.5 rounded-full bg-fuchsia-300" />
        </div>

        {/* 404 */}
        <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase mb-2">
          Error 404
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or has been moved
          somewhere else.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a
            href="/"
            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-3 px-6 rounded-xl transition-colors duration-150 text-center"
          >
            Go home
          </a>
          <button
            onClick={() => window.history.back()}
            className="flex-1 bg-violet-50 hover:bg-violet-100 text-violet-600 text-sm font-medium py-3 px-6 rounded-xl transition-colors duration-150"
          >
            Go back
          </button>
        </div>
      </div>

      {/* Footer hint */}
      <p className="mt-6 text-xs text-violet-300">
        Lost? Try searching or go back to the homepage.
      </p>
    </div>
  );
};

export default NotFound;
