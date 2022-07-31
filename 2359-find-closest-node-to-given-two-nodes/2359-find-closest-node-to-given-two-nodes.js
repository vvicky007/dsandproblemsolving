/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
      const set1 = new Set();
  const set2 = new Set();
  set1.add(node1);
  set2.add(node2);
  let p1 = node1;
  let p2 = node2;
  let result = Infinity;
  while (edges[p1] !== -1 || edges[p2] !== -1) {
	// check if current node visited by both
	if (set1.has(p2)) result = p2;
	if (set2.has(p1)) result = result < p1 ? result : p1; // return smallest index
	if (result !== Infinity) return result;
	// next node
	if (edges[p1] !== -1) p1 = edges[p1];
	if (edges[p2] !== -1) p2 = edges[p2];
	// exit in case circles
	if ( set1.has(p1) && set2.has(p2) && !(edges[p1] === -1 && edges[p2] === -1)) break;
	set1.add(p1);
	set2.add(p2);
  }
  return p1 === p2 ? p1 : -1;
};