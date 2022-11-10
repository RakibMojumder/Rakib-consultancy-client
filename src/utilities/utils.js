

export const reviewDelete = (id, reviews, setReviews) => {
    fetch(`https://rakib-consultancy-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                const remaining = reviews.filter((rev) => rev._id !== id);
                setReviews(remaining);
                // toast.success("Successfully delete review");
            }
        });

}