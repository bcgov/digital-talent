-- CreateEnum
CREATE TYPE "GridAffiliation" AS ENUM ('BCGEU', 'MCCF', 'PEA');

-- CreateEnum
CREATE TYPE "PositionCategory" AS ENUM ('BAND', 'AO', 'IS');

-- CreateEnum
CREATE TYPE "CompetitionState" AS ENUM ('DRAFT', 'PUBLISHED', 'INTAKE_PERIOD', 'APPLICATION_PERIOD', 'ASSESSMENT_PERIOD', 'INTERVIEW_PERIOD', 'OFFER_PERIOD', 'CLOSED', 'CANCELLED');

-- CreateTable
CREATE TABLE "classification" (
    "id" UUID NOT NULL,
    "grid_id" UUID NOT NULL,
    "position_id" UUID NOT NULL,
    "rate_adjustment" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "classification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grid" (
    "id" UUID NOT NULL,
    "affiliation" "GridAffiliation" NOT NULL,
    "name" TEXT NOT NULL,
    "steps" JSONB[],
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "grid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position" (
    "id" UUID NOT NULL,
    "category" "PositionCategory" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "roles" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "identity" (
    "sub" TEXT NOT NULL,
    "identity_provider" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "identity_pkey" PRIMARY KEY ("sub","identity_provider")
);

-- CreateTable
CREATE TABLE "competition_schedule" (
    "id" UUID NOT NULL,
    "state" "CompetitionState" NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "competition_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "grid_name_key" ON "grid"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "classification" ADD CONSTRAINT "classification_grid_id_fkey" FOREIGN KEY ("grid_id") REFERENCES "grid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classification" ADD CONSTRAINT "classification_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "identity" ADD CONSTRAINT "identity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
