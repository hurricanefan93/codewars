Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

    *
   ***
  *****
 *******
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.

My solution:

function christmasTree(height) {
  var tree = '';
  var spaces = Array(height).join(' ');

  for (var i = 0; i < height; i++) {
    var stars = Array((i * 2) + 2).join('*');
    if (tree !== '') tree += '\n';
    tree += spaces + stars + spaces;
    spaces = spaces.slice(0, -1);
  }

  return tree;
}
