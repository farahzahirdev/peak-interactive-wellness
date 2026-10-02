export default function TrustBar() {
  return (
    <div className="pk-trust" role="region" aria-label="Trust signals">
      <div className="container-main">
        <ul className="pk-trust-row list-none p-0 m-0">
          <li className="pk-trust-item">
            <StarIcon />
            <span>
              Over <strong>350</strong> five-star Google reviews
            </span>
          </li>
          <li className="pk-trust-item">
            <ShieldIcon />
            <span>Most commercial insurance accepted</span>
          </li>
          <li className="pk-trust-item">
            <PinIcon />
            <span>Greenwood Village · Denver · Telehealth</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-mustard" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-mustard" aria-hidden="true">
      <path fillRule="evenodd" d="M10 1.944l-6.5 2.167v5.14c0 3.9 2.55 7.52 6.5 8.749 3.95-1.229 6.5-4.849 6.5-8.749v-5.14L10 1.944zM8.293 11.707a1 1 0 01-1.414-1.414l2-2a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L9.5 9.914l-1.207 1.793z" clipRule="evenodd" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-mustard" aria-hidden="true">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}
