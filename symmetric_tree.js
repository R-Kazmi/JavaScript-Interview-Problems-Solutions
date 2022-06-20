



//given a binary tree, check if its symmetric at its center

function isSymmetricRecursion(left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isSymmetricRecursion(left.left, right.right) && isSymmetricRecursion(left.right, right.left);
}

function symmetricTreeCall(tree) {
    if (tree === null) {
        return true;
    }
    return isSymmetricRecursion(tree.left, tree.right);
}

const OGtree = {
    val: 5,
    left: {
        val: 6,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    },
    right: {
        val: 6,
        left: {
            val: 9,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

console.log(symmetricTreeCall(OGtree));