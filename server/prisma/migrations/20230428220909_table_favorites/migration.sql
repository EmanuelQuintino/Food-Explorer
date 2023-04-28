-- CreateTable
CREATE TABLE "favorites" (
    "user_id" TEXT NOT NULL,
    "plate_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "plate_id"),
    CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "favorites_plate_id_fkey" FOREIGN KEY ("plate_id") REFERENCES "plates" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
