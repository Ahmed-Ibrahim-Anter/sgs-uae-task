import { useMemo } from "react";

export const useFurnitureItems = () => {
  const furnitureItems = useMemo(
    () => [
      {
        id: 1,
        name: "Sofa",
        description: "A comfortable sofa for your living room",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8U29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "$499.99",
      },
      {
        id: 2,
        name: "Armchair",
        description: "A cozy armchair for your reading nook",
        image:
          "https://images.unsplash.com/photo-1579488085123-6a6a3630f0f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8QXJtY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "$299.99",
      },
      {
        id: 3,
        name: "Coffee Table",
        description: "A stylish coffee table for your living room",
        image:
          "https://images.unsplash.com/photo-1581392744155-818e3199dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZmZlZSUyMHRhYmxlJTIwYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "$199.99",
      },
      {
        id: 4,
        name: "Dining Table",
        description: "A spacious dining table ",
        image:
          "https://images.unsplash.com/photo-1617850687361-a07b256ff259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8RGluaW5nJTIwVGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "$599.99",
      },
      {
        id: 5,
        name: "Side Table",
        description: "A small side table for your bedroom",
        image:
          "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U2lkZSUyMFRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: "$99.99",
      },
      {
        id: 6,
        name: "Bookshelf",
        description: "A tall bookshelf for your home office",
        image:
          "https://images.unsplash.com/photo-1593814013328-6041acc27094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzaGVsZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "$399.99",
      },
      {
        id: 7,
        name: "TV Stand",
        description: "A modern TV stand for you",
        image:
          "https://plus.unsplash.com/premium_photo-1664302212245-3213e01fca75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8VFYlMjBTdGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: "$299.99",
      },
      {
        id: 8,
        name: "Bed",
        description: "A comfortable bed for a good night's sleep",
        image:
          "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8QmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: "$799.99",
      },
      {
        id: 9,
        name: "Dresser",
        description: "A spacious dresser for your clothes",
        image:
          "https://plus.unsplash.com/premium_photo-1683141491701-6a4e1d9ea3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRyZXNzZXIlMjBkcmF3ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "$499.99",
      },
      {
        id: 10,
        name: "Nightstand",
        description: "A small nightstand for your bedside",
        image:
          "https://images.unsplash.com/photo-1455792244736-3ed96c3d7f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2h0c3RhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "$149.99",
      },
    ],
    []
  );

  return furnitureItems;
};
