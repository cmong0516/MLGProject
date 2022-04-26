import React, {useState} from "react";

function SeeMore({review}) {

    let [seeMore, setSeeMore] = useState(false);

    return (
        <div>
            {
                seeMore
                    ? review
                    : review.slice(0,50)
            }
            {
                review.length > 100 &&
                    !seeMore
                    ? <span onClick={() => setSeeMore(true)}>... [더보기]</span>
                    : <span onClick={() => setSeeMore(false)}>[닫기]</span>
            }
        </div>
    );
}

export default SeeMore;
