import Link from 'next/link'

export default function AccessDenied() {
  return (
    <div className="text-center" style={{ padding: "50px 0" }}>
      <h3>
        Access Denied!
        <br /> You need to login first.
      </h3>
      <br />
      <Link href="/login" passHref>
        <a className="btn btn-lg btn-primary">Go to login page</a>
      </Link>
    </div>
  );
}
