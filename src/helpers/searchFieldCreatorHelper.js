const searchFieldCreatorHelper = (newUser) => {
  const searchFieldCreator = (field) => {
    const searchField = field
      .toLowerCase()
      .normalize('NFD')
      .replace(/([\u0300-\u036f]|[\s])/g, '');

    return searchField;
  };

  const cityLocationForSearch = searchFieldCreator(newUser.location.city);
  const stateLocationForSearch = searchFieldCreator(newUser.location.state);
  const countryLocationForSearch = searchFieldCreator(newUser.location.country);

  const firstNameForSearch = searchFieldCreator(newUser.name.first);
  const lastNameForSearch = searchFieldCreator(newUser.name.last);

  return {
    locationForSearch: {
      city: cityLocationForSearch,
      state: stateLocationForSearch,
      country: countryLocationForSearch,
    },
    searchName: {
      first: firstNameForSearch,
      last: lastNameForSearch,
    },
  };
};

export { searchFieldCreatorHelper };
