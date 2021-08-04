## Seat Reservation

An application that is used to reserve seats in a given space for a specified duration that can be configured within the application.
It is split into 2 sections - booking and administration.

#### Booking Section

Within the booking section users can view their reservations, create new ones in a location of choosing based on where they can book or delete current bookings.
As a manager or administrator you might be able to reserve for other users.
The booking section will also allow reservation of rooms / facilities.

#### Administration Section

The administration section will function as the applications back office and only be accessible to users with a given role.
The core aspects of the admin section will be the creation and maintenance of bookable items and managing user roles.

#### Tech Stack

The application will be developed in TypeScript for both frontend and backend.

#### Frontend

Next JS
TailwindCSS / StyledComponents
Axios / React Query

#### Backend

Express Apollo Server
GraphQL
PostgreSQL
Express-session
Redis (Session storage)
Archon2 (Password hashing if auth is not managed externally)
