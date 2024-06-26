// 875. Koko Eating Bananas



// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.



/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAllBananas(piles, mid, h)) {
            right = mid; // Try to find a smaller k
        } else {
            left = mid + 1; // Increase k
        }
    }
    
    return left; // or right, as left == right
};


function canEatAllBananas(piles, k, h) {
    let hours = 0;
    for (let pile of piles) {
        hours += Math.ceil(pile / k);
    }
    return hours <= h;
}
