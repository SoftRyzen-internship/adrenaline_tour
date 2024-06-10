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
export const getCountries = `query getCountries {
  countries {
    data {
      id
      attributes{
        name
 ------------- // додавши наступне можна дізнатись які тури мають цю країну, якщо немає, то data === null
        tour {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    }
  }
}`;

// запит за активностями
export const getActivities = `query getActivities {
    activities {
      data {
        id
        attributes{
          name
 ------------- // додавши наступне можна дізнатись які тури мають цю активність, якщо немає, то data === null
          tour {
            data {
              attributes {
                title
                slug
              }
            }
          }
        }
      }
    }
  }`;

// запит за відгуками
export const getReviews = `query getReviews {
    review {
      data {
        attributes{
          reviews {
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

// запит за галиреєю
export const getGallery = `query getGallery {
    gallery {
      data {
        attributes{
          images {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }`;

// запит за всіма (масив карток) турами
export const getAllTours = `query getAllTours {
  tours {
    data {
      id
      attributes {
        img {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        date
        title
        duration
        slug
        recommended
        activities {
          data {
            id
            attributes {
              name
            }
          }
        }
        countries {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}`;

// запит карток по місяцям. потрібно передавати 2 параметра: "startOfMonth": "2024-06-01",
// та "endOfMonth": "2024-06-30". в такому випадку сервер поверне усі картки за поточний відрізок часу
export const getToursByMonth = `query GetToursByMonth($startOfMonth: Date!, $endOfMonth: Date!) {
  tours(
    filters: { date: { gte: $startOfMonth, lte: $endOfMonth } }
    sort: "date:asc"
  ) {
    data {
      id
      attributes {
        img {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        date
        title
        duration
        slug
        recommended
        activities {
          data {
            id
            attributes {
              name
            }
          }
        }
        countries {
          data {
            id
            attributes {
              name
            }
          }
        }
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
        img {
          data {
            id
            attributes {
              alternativeText
              url
            }
          }
        }
        title
        duration
        date
        slug
        description
        recommended
        activities {
          data {
            id
            attributes {
              name
            }
          }
        }
        countries {
          data {
            id
            attributes {
              name
            }
          }
        }
        plans {
          title
          description
        }
        services {
          title
          features {
            id
            name
            included
          }
        }
        rent {
          title
          equipment
        }
        details {
          route {
            title
            description
          }
          seasons {
            title
            description
          }
          difficult {
            title
            description
          }
          meet {
            title
            location {
              place
            }
          }
          price {
            title
            description
          }
        }
        gallery {
          data {
            id
            attributes {
              alternativeText
              url
            }
          }
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
          data {
            id
            attributes {
              alternativeText
              url
            }
          }
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
        title
        duration
        description
        activities {
          data {
            id
            attributes {
              name
            }
          }
        }
        countries {
          data {
            id
            attributes {
              name
            }
          }
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
          title
          description
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
        services {
          title
          features {
            id
            name
            included
          }
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ Оренда обладнання:
export const getTourRent = `query getTourRent($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        rent {
          title
          equipment
        }
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
          route {
            title
            description 
          }
          seasons {
            title
            description
          }
          difficult {
            title
            description
          }
          meet {
            title
            location {
              place
            }
          }
          price {
            title
            description
          }
        }
      }
    }
  }
}`;

// запит за карткою Tour за slug СЕКЦІЯ індивідуальної галиреї туру:
export const getTourGallery = `query getTourGallery($slug: String!) {
  tours(filters: { slug: { eq: $slug } }) {
    data {
      id
      attributes {
        gallery {
          data {
            id
            attributes {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
}`;
