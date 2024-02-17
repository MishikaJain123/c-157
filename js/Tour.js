AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Batman",
        title: "Batman",
        url: "assets/thumbnails/download.jpeg",
      },
      {
        id: "Spiderman",
        title: "Spiderman",
        url: "assets/thumbnails/images.jpeg",
      },

      {
        id: "Wonderwomen",
        title: "Wonderwomen",
        url: "assets/thumbnails/wonder-woman-nc2b05-cover-r.a.-and-d.g.-1985-federal-comics-australia.png",
      },
      {
        id: "hulk",
        title: "hulk",
        url: "assets/thumbnails/0_222f.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element

      const border1 = this.createBorder(position, item.id)


      // Thumbnail Element
      const thumbnail1 = this.createThumbnail(item)
border1.appendChild(thumbnail1)
      // Title Text Element
      const title1 = this.createTitle(position, item)
border1.appendChild(title1)
      this.placesContainer.appendChild(border1);
    }
  },
  createBorder: function (position, id) {
    const entity = document.createElement("a-entity")
    entity.setAttribute("position", position);
    entity.setAttribute("id", id);
    entity.setAttribute("visible", true);
    entity.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    });
    entity.setAttribute("material", {
      color: "#0077CC",
      opacity: 1
    });
    return entity;
  },
  createThumbnail: function (item) {
    const entity = document.createElement("a-entity")
    entity.setAttribute("visible", true);
    entity.setAttribute("geometry", {
      primitive: "circle",
      radius: 9
    });
    entity.setAttribute("material", {
      src: item.url
    });
    return entity;
  },
  createTitle: function (position, item) {
    const entity = document.createElement("a-entity")
    position.y = -20
    entity.setAttribute("position", position);
    entity.setAttribute("visible", true);
    entity.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#E65100",
      value: item.title
    });
    return entity;
  },
});
