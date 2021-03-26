exports.handleFloorPlan = (aptData) => {
    let floorPlanString = "";
    if (aptData.floorPlan) {
    let values = Object.values(aptData.floorPlan);
    let entries = values.filter((item) => item.amount);
    entries.forEach((entry) => {
      switch (entry.title) {
        case "regular":
          floorPlanString += `${entry.amount}h`;
          break;
        case "kitchen":
          floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}k`;
          break;
        case "kitchenette":
          floorPlanString += `, ${entry?.amount === 1 ? "" : entry.amount}kk`;
          break;
        case "diningRoom":
          floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}rh`;
          break;
        case "bathRoom":
          floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}kh`;
          break;
        case "toilet":
          floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}wc`;
          break;
        case "sauna":
          floorPlanString += `, ${
            entry.amount === 1 ? "" : entry.amount
          }sauna`;
          break;
        case "wardrobe":
          floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}vh`;
          break;
        case "utility room":
          floorPlanString += `, ${entry.amount === 1 ? "" : entry.amount}khh`;
          break;
      }
    });
    if (aptData.balcony?.exists) {
      floorPlanString += ", parveke";
    }
    if (aptData.patio?.exists) {
      floorPlanString += ", terassi";
    }
    }
    return floorPlanString;
  }

exports.handleApartmentType  = (apartment) => {
    const type = apartment.apartmentType;
    let typeString;
    switch (type) {
      case 1:
        typeString = "Kerrostaloasunto";
        break;
      case 2:
        typeString = "Rivitalo";
        break;
      case 3:
        typeString = "Paritalo";
        break;
      case 4:
        typeString = "Omakotitalo";
        break;
      case 5:
        typeString = "Ketjutalo";
        break;
      case 6:
        typeString = "Luhtitalo";
        break;
      case 7:
        typeString = "Puutalo-osake";
        break;
      case 8:
        typeString = "Muu";
        break;
    }
    return typeString;
  }
