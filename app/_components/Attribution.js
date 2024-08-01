import Link from "next/link";

function Attribution() {
  return (
    <div className="fixed left-0 top-0 hidden p-4 text-[0.625rem] desktop:block">
      <p class="attribution">
        Challenge by&nbsp;
        <Link
          className="underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . <br />
        Coded by{" "}
        <Link href="/" className="underline">
          Raul
        </Link>
        .
      </p>
    </div>
  );
}

export default Attribution;
