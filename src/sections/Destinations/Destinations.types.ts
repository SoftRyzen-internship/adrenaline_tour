interface Tour {
  title: string;
  slug: string;
}

interface CountryAttributes {
  name: string;
  tour: {
    data: {
      attributes: Tour;
    } | null;
  };
}

export interface Country {
  id: string;
  attributes: CountryAttributes;
}

export interface CountriesResponse {
  countries: {
    data: Country[];
  };
}

interface ActivitieAttributes {
  name: string;
  tour: {
    data: {
      attributes: Tour;
    } | null;
  };
}

export interface Activity {
  id: string;
  attributes: ActivitieAttributes;
}

export interface ActivitiesResponse {
  activities: {
    data: Activity[];
  };
}
