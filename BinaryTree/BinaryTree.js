function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Preorder Traversal
function preorderTraversal(root) {
  let result = [];

  function preorder(node) {
    if (!node) {
      return;
    }

    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);

  return result;
}

// Inorder Traversal
function inorderTraversal(root) {
  let result = [];

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  return result;
}

// Postorder Traversal
function postorderTraversal(root) {
  let result = [];

  function postorder(node) {
    if (!node) {
      return;
    }

    postorder(node.left);
    postorder(node.right);
    result.push(node.val);
  }

  postorder(root);

  return result;
}

// Level order Traversal
function levelOrder(root) {
  if (!root) return [];

  let queue = [root];
  let front = 0;
  let result = [];

  while (front < queue.length) {
    let size = queue.length - front;
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue[front++];

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Max Depth/Height
function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + leftDepth + rightDepth;
}

// Path sum
function hasPathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  let remaining = targetSum - root.val;

  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}

// Symmetric Tree
function isSymmetric(root) {
  function isMirror(left, right) {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) return false;

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right);
}

// Invert Tree/Mirror
function invertTree(root) {
  if (!root) {
    return null;
  }

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// Same Tree
function isSameTree(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Balanced Tree
function isBalanced(root) {
  function dfs(node) {
    if (!node) {
      return 0;
    }

    let left = dfs(node.left);
    if (left === -1) return -1;

    let right = dfs(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) {
      return -1;
    }

    return 1 + Math.max(left, right);
  }

  return dfs(root) !== -1;
}

// Diameter of Binary Tree
function diameterOfBinaryTree(root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return diameter;
}

// Subtree of Another Tree
function isSubtree(root, subRoot) {
  if (!root) {
    return false;
  }
  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
}

// Right Side View
function rightSideView(root) {
  if (!root) {
    return [];
  }

  let result = [];
  let front = 0;
  let queue = [root];

  while (front < queue.length) {
    let size = queue.length - front;

    for (let i = 0; i < size; i++) {
      let node = queue[front++];

      if (i === size - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

// Print Leave Node
function printLeaves(root) {
  let result = [];

  function dfs(node) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      result.push(node.val);
      return;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result;
}

// Count Good Nodes
function goodNodes(root) {
  function dfs(node, max) {
    if (!node) {
      return 0;
    }

    let count = 0;

    if (node.val >= max) {
      count = 1;
      max = node.val;
    }

    return count + dfs(node.left, max) + dfs(node.right, max);
  }

  return dfs(root, -Infinity);
}

// Maximum Path Sum
function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));

    let current = left + right + node.val;

    maxSum = Math.max(maxSum, current);

    return node.val + Math.max(left, right);
  }

  dfs(root);
  return maxSum;
}

// Valid Binary Search Tree
function isValidBst(root) {
  function isValid(node, min, max) {
    if (!node) return;

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }

  return isValid(root, -Infinity, Infinity);
}

// Search in Binary Search Tree
function searchBST(root, val) {
  if (!root) return null;

  if (val === root.val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}

// Insert into Binary Search Tree
function insertBst(root, val) {
  if (root === null) {
    return { root, left: null, right: null };
  }

  if (val < root.val) {
    root.left = insertBst(root.left, val);
  } else {
    root.right = insertBst(root.right, val);
  }

  return root;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(printLeaves(root));
// let newRoot = invertTree(root);
// console.log(levelOrder(newRoot));

//8660746983
