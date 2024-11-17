export default function Flag() {
  const countryFlags = [
    "English",
    "French",
    "German",
    "Spanish",
    "Italian",
    "Chinese",
    "Japanese",
    "Portugese",
    "Russian",
  ];
  return (
    <>
      <ul>
        {countryFlags.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
