-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_order_plates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order_id" TEXT NOT NULL,
    "plate_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "order_plates_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "order_plates_plate_id_fkey" FOREIGN KEY ("plate_id") REFERENCES "plates" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_order_plates" ("created_at", "id", "order_id", "plate_id", "updated_at") SELECT "created_at", "id", "order_id", "plate_id", "updated_at" FROM "order_plates";
DROP TABLE "order_plates";
ALTER TABLE "new_order_plates" RENAME TO "order_plates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
