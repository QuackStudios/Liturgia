import { useQuery, gql } from "@apollo/client";

const HEADER_QUERY = gql`
  query HeaderQuery($siteId: Int!) {
    header(siteId: $siteId) {
      logo
      links
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(HEADER_QUERY, {
    variables: { siteId: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <img src={data.header.logo} alt="Logo" />
      <nav>
        {data.header.links.map((link, index) => (
          <a key={index} href={`/${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}
