
const showFormattedDate = (date, locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(`${locale === 'id' ? 'in-IN' : 'en-EN'}`, options);
};

export { showFormattedDate };
