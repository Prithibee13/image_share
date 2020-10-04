if (Meteor.isClient) 
{
  var img_data = [
  {
    img_src:"72458.jpg",
    img_alt:"my pet"
  },

  {
    img_src:"990909f8f4b18d0c5612fb624fccafb4.jpg",
    img_alt:"my pet"
  },

  {
    img_src:"076314114f12aa9d0e59c75d932651b7.jpg",
    img_alt:"my pet"
  },

  {
    img_src:"cat-with-laptop.jpg",
    img_alt:"my pet"
  }  

  ];
 Template.images.helpers({images:img_data});
}

if (Meteor.isServer) 
{
  console.log("I am a server");
}
