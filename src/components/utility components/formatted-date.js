export default function formatGeneralDate(date) {
  const newDate = new Date(date);
  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  return dateTimeFormatter.format(newDate);
}
