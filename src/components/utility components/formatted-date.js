export default function formatGeneralDate(date) {
  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  return dateTimeFormatter.format(date);
}
