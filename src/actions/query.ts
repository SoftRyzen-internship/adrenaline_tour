const countriesAndActivitiesFields = `
  name
  tour {
    data {
      attributes(sort: "title:asc") {
        title
        slug
      }
    }
  }
`;
const imagesFields = `
  data {
    id
    attributes {
      url
      alternativeText
    }
  }
`;
const countriesAndActivitiesSmallFields = `
  data {
    id
    attributes {
      name
    }
  }
`;
const toursAttributesDataFields = `
  img {
    ${imagesFields}
  }
  date
  title
  duration
  slug
  recommended
  activities {
    ${countriesAndActivitiesSmallFields}
  }
  countries {
    ${countriesAndActivitiesSmallFields}
  }
`;
const titleAndDescriptionFields = `
  title
  description
`;

const rentField = `
  rent {
    title
    equipment
  }
`;

const servicesFields = `
  services {
    title
    features {
      id
      name
      included
    }
  }
`;

const tourDataDetailsField = `
  route {
    ${titleAndDescriptionFields}
  }
  seasons {
    ${titleAndDescriptionFields}
  }
  difficult {
    ${titleAndDescriptionFields}
  }
  meet {
    title
    location {
      place
    }
  }
  price {
    ${titleAndDescriptionFields}
  }
`;

// запит для сторінки політики КОНФІДЕНЦІЙНОСТІ
export const getPolicy = `query getPolicy {
    policy {
      data {
        attributes{
          title
          text
        }
      }
    }
  }`;

// запит за країнами
// додавши об'єкт tour можна дізнатись які тури мають цю країну, якщо немає, то data === null якщо ця інформація не потрібна то прибрати об'єкт tour
export const getCountries = `query getCountries {
  countries(sort: "name:asc") {
    data {
      id
      attributes{
        ${countriesAndActivitiesFields}
      }
    }
  }
}`;

// запит за активностями
// додавши об'єкт tour можна дізнатись які тури мають цю країну, якщо немає, то data === null якщо ця інформація не потрібна то прибрати об'єкт tour
export const getActivities = `query getActivities {
    activities(sort: "name:asc") {
      data {
        id
        attributes{
          ${countriesAndActivitiesFields}
        }
      }
    }
  }`;

// запит за відгуками
export const getReviews = `query getReviews {
    review {
      data {
        attributes{
          reviews(sort: "date:asc") {
            id
            title
            text
            author
            date
          }
        }
      }
    }
  }`;

// запит за контактами
export const getContact = `query getContact {
    contact {
      data {
        attributes{
          email
          numbers {
            ua
            cz
          }
        }
      }
    }
  }`;

// запит за галереєю
export const getGallery = `query getGallery {
    gallery {
      data {
        attributes{
          images {
            ${imagesFields}
          }
        }
      }
    }
  }`;

// запит за всіма (масив карток) турами повертається з сортуванням по даті
// за замовчуванням приходить 10 карток, щоб вказати кількість карток для сторінки (для пагінації - "pageSize": 6 - ЗНАЧЕННЯ NUMBER)
// для отримання наступної сторінки - передаємо "page": 2 та "pageSize": 6 - ЗНАЧЕННЯ NUMBER
// для запиту карток по місяцям. потрібно передавати 2 параметра: "startOfMonth": "2024-06-01",
// та "endOfMonth": "2024-06-30". в такому випадку сервер поверне усі картки за поточний відрізок часу
export const getAllTours = `query getAllTours($page: Int = 1, $pageSize: Int = 10, $recommended: Boolean, $startOfMonth: Date, $endOfMonth: Date) {
  tours(
  pagination: { page: $page, pageSize: $pageSize }
  filters: {
    recommended: { eq: $recommended },
    date: { gte: $startOfMonth, lte: $endOfMonth }
  }
  sort: "date:asc"
  ) {
    data {
      id
      attributes {
        ${toursAttributesDataFields}
      }
    }
  meta {
      pagination {
        pageCount
      }
    }
  }
}`;

// запит за карткою Tour за slug ПОВНА КАРТКА
export const getTour = `query getTour($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        ${toursAttributesDataFields}
        description
        plans {
          ${titleAndDescriptionFields}
        }
        ${servicesFields}
        ${rentField}
        details {
          ${tourDataDetailsField}
        }
        gallery {
          ${imagesFields}
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug ФОТО HERO
export const getTourImg = `query getTourImg($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        img {
          ${imagesFields}
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug ОСНОВНА ІНФОРМАЦІЯ
export const getTourMainInfo = `query getTourMainInfo($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        ${titleAndDescriptionFields}
        duration
        activities {
          ${countriesAndActivitiesSmallFields}
        }
        countries {
          ${countriesAndActivitiesSmallFields}
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ ЧИМ МИ ЗАЙМЕМОСЬ
export const getTourPlans = `query getTourPlans($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        plans {
          ${titleAndDescriptionFields}
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ Що входить у вартість туру?
export const getTourServices = `query getTourServices($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        ${servicesFields}
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ Оренда обладнання:
export const getTourRent = `query getTourRent($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        ${rentField}
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ деталей (description string | null):
export const getTourDetails = `query getTourDetails($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        details {
          ${tourDataDetailsField}
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ індивідуальної галереї туру:
export const getTourGallery = `query getTourGallery($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        gallery {
          ${imagesFields}
        }
      }
    }
  }
}`;
