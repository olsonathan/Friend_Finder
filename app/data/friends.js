// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
//  You could add "dummy" data array.
// ===============================================================================

var friendsArray = [
    {
        "name":"Ahmed",
        "photo":"https://picsum.photos/200/300",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ],
          "total": "32"
      },
      {
        "name":"Karl",
        "photo":"https://picsum.photos/id/490/200/300",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ],
          "total": "44"
      },
      {
        "name":"Test",
        "photo":"https://picsum.photos/id/305/200/300",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ],
          "total": "22"
      },

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
