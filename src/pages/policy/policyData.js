export const data = {
  categories: [
    {
      label: "Outstation Travel",
      services: [
        {
          label: "Outstation",
          rules: [
            {
              key: "MONTHLY_LIMIT_BASE_CITY",
              title: "Monthly limit in base city",
              hasLimit: false,
              value: "No Monthly limit in base city",
            },
            {
              key: "DAILY_TXN_BASE_CITY",
              title: "Daily txn count limit in base city",
              hasLimit: false,
              value: "No Daily txn count limit in base city",
            },
            {
              key: "MONTHLY_TIER_1",
              title: "Monthly txn limit in tier 1 city",
              hasLimit: false,
              value: "No Monthly txn limit in tier 1 city",
            },
            {
              key: "MONTHLY_TIER_2",
              title: "Monthly txn limit in tier 2 city",
              hasLimit: false,
              value: "No Monthly txn limit in tier 2 city",
            },
            {
              key: "MONTHLY_TIER_3",
              title: "Monthly txn limit in tier 3 city",
              hasLimit: false,
              value: "No Monthly txn limit in tier 3 city",
            },
          ],
        },
        {
          label: "Bus",
          rules: [
            {
              key: "BUS_DAILY_LIMIT",
              title: "Daily bus expense limit",
              hasLimit: false,
              value: "No Daily bus expense limit",
            },
            {
              key: "BUS_MONTHLY_LIMIT",
              title: "Monthly bus expense limit",
              hasLimit: false,
              value: "No Monthly bus expense limit",
            },
          ],
        },
        {
          label: "Cab",
          rules: [
            {
              key: "CAB_DAILY_LIMIT",
              title: "Daily cab expense limit",
              hasLimit: false,
              value: "No Daily cab expense limit",
            },
            {
              key: "CAB_MONTHLY_LIMIT",
              title: "Monthly cab expense limit",
              hasLimit: false,
              value: "No Monthly cab expense limit",
            },
          ],
        },
      ],
    },

    {
      label: "Accommodation",
      services: [
        {
          label: "Hotel",
          rules: [
            {
              key: "HOTEL_DAILY_LIMIT",
              title: "Daily hotel expense limit",
              hasLimit: false,
              value: "No Daily hotel expense limit",
            },
            {
              key: "HOTEL_MONTHLY_LIMIT",
              title: "Monthly hotel expense limit",
              hasLimit: false,
              value: "No Monthly hotel expense limit",
            },
          ],
        },
        {
          label: "Guest House",
          rules: [
            {
              key: "GUEST_HOUSE_DAILY_LIMIT",
              title: "Daily guest house expense limit",
              hasLimit: false,
              value: "No Daily guest house expense limit",
            },
          ],
        },
      ],
    },

    {
      label: "Meals",
      services: [
        {
          label: "Breakfast",
          rules: [
            {
              key: "BREAKFAST_LIMIT",
              title: "Breakfast expense limit",
              hasLimit: false,
              value: "No Breakfast expense limit",
            },
          ],
        },
        {
          label: "Lunch",
          rules: [
            {
              key: "LUNCH_LIMIT",
              title: "Lunch expense limit",
              hasLimit: false,
              value: "No Lunch expense limit",
            },
          ],
        },
        {
          label: "Dinner",
          rules: [
            {
              key: "DINNER_LIMIT",
              title: "Dinner expense limit",
              hasLimit: false,
              value: "No Dinner expense limit",
            },
          ],
        },
      ],
    },

    {
      label: "Local Conveyance",
      services: [
        {
          label: "Auto",
          rules: [
            {
              key: "AUTO_LIMIT",
              title: "Auto expense limit",
              hasLimit: false,
              value: "No Auto expense limit",
            },
          ],
        },
        {
          label: "Taxi",
          rules: [
            {
              key: "TAXI_LIMIT",
              title: "Taxi expense limit",
              hasLimit: false,
              value: "No Taxi expense limit",
            },
          ],
        },
      ],
    },

    {
      label: "Miscellaneous",
      services: [
        {
          label: "Communication",
          rules: [
            {
              key: "COMMUNICATION_LIMIT",
              title: "Communication expense limit",
              hasLimit: false,
              value: "No Communication expense limit",
            },
          ],
        },
        {
          label: "Laundry",
          rules: [
            {
              key: "LAUNDRY_LIMIT",
              title: "Laundry expense limit",
              hasLimit: false,
              value: "No Laundry expense limit",
            },
          ],
        },
      ],
    },
  ],
};
