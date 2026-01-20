import {
  FiHome,
  FiCheckSquare,
  FiFileText,
  FiCreditCard,
} from "react-icons/fi";

export const sidebarConfig = [
  {
    label: "Home",
    path: "/",
    icon: FiHome,
  },
  {
    label: "Approvals",
    icon: FiCheckSquare,
    children: [
      {
        label: "Team Approvals",
        path: "/approvals/team",
        children: [
          {
            label: "Pending",
            path: "/approvals/team/pending",
            children: [
              {
                label: "Finance Review",
                path: "/approvals/team/pending/finance",
                children: [
                  {
                    label: "High Amount",
                    path: "/approvals/team/pending/finance/high",
                  },
                  {
                    label: "Low Amount",
                    path: "/approvals/team/pending/finance/low",
                  },
                ],
              },
            ],
          },
          {
            label: "Completed",
            path: "/approvals/team/completed",
          },
        ],
      },

      {
        label: "My Approvals",
        path: "/approvals/my",
        children: [
          {
            label: "Drafts",
            path: "/approvals/my/drafts",
          },
          {
            label: "Submitted",
            path: "/approvals/my/submitted",
          },
        ],
      },
    ],
  },
  {
    label: "Task 4",
    icon: FiFileText,
    path: "/task4",

    // children: [
    //   {
    //     label: "Transactions",
    //     path: "/expense/transactions",
    //     children: [
    //       {
    //         label: "Food",
    //         path: "/expense/transactions/food",
    //         children: [
    //           {
    //             label: "Domestic",
    //             path: "/expense/transactions/food/domestic",
    //           },
    //           {
    //             label: "International",
    //             path: "/expense/transactions/food/international",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },

  {
    label: "Flight Booking",
    icon: FiCreditCard,
    path: "/booking",
  },
  {
    label: "RTK",
    path: "/rtk",
  },
];
