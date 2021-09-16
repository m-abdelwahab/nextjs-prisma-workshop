import React from 'react';
import Link from 'next/link';

const SingleFeedback = ({ feedbackItem }) => {
  return (
    <div className="prose prose-blue text-white mx-auto h-screen">
      <Link href="/feedback">
        <a>Go back</a>
      </Link>
      <p>{feedbackItem.message}</p>
      <p>
        {feedbackItem.name} - {feedbackItem.email}
      </p>
    </div>
  );
};

export default SingleFeedback;

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  return {
    props: {
      feedbackItem: {
        id: 1,
        message: "Hey there I'm a demo message",
        feedbackType: 'ISSUE',
        email: 'mahmoud@prisma.io',
        name: 'Mahmoud',
      },
    },
  };
};
