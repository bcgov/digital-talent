-- CreateEnum
CREATE TYPE "CandidateStatus" AS ENUM ('HIRED');

-- CreateEnum
CREATE TYPE "OpportunityState" AS ENUM ('OPEN', 'CLOSED');

-- CreateEnum
CREATE TYPE "ResidencyStatus" AS ENUM ('CITIZEN', 'PR', 'PR_WIP', 'PERMIT', 'INELIGIBLE');

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idir_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roles" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "digital_talent_role" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "digital_talent_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ministry" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ministry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "min_years_experience" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "assigned_to_id" UUID,
    "opportunity_id" UUID,
    "role_id" UUID,
    "name" TEXT,
    "email_address" TEXT,
    "linkedin_url" TEXT,
    "available_at" TIMESTAMP(3),
    "would_relocate" BOOLEAN,
    "num_years_exp" INTEGER,
    "residency_status" "ResidencyStatus",
    "status" "CandidateStatus",
    "is_contacted" BOOLEAN,
    "knowledge_and_abilities" TEXT,
    "links" TEXT[],
    "marketing_qualities" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_location" (
    "candidate_id" UUID NOT NULL,
    "location_id" UUID NOT NULL,
    "rank" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "candidate_location_pkey" PRIMARY KEY ("candidate_id","location_id")
);

-- CreateTable
CREATE TABLE "candidate_opportunity" (
    "candidate_id" UUID NOT NULL,
    "opportunity_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "candidate_opportunity_pkey" PRIMARY KEY ("candidate_id","opportunity_id")
);

-- CreateTable
CREATE TABLE "candidate_skill" (
    "candidate_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "candidate_skill_pkey" PRIMARY KEY ("candidate_id","skill_id")
);

-- CreateTable
CREATE TABLE "hiring_manager" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "assigned_to_id" UUID,
    "ministry_id" UUID,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "hiring_manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "description" TEXT,
    "links" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opportunity" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "role_id" UUID NOT NULL,
    "team_id" UUID NOT NULL,
    "state" "OpportunityState" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opportunity_location" (
    "location_id" UUID NOT NULL,
    "opportunity_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "opportunity_location_pkey" PRIMARY KEY ("location_id","opportunity_id")
);

-- CreateTable
CREATE TABLE "opportunity_skill" (
    "opportunity_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "is_mandatory" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "opportunity_skill_pkey" PRIMARY KEY ("opportunity_id","skill_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_idir_id_key" ON "user"("idir_id");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_opportunity_id_key" ON "candidate"("opportunity_id");

-- AddForeignKey
ALTER TABLE "candidate" ADD CONSTRAINT "candidate_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate" ADD CONSTRAINT "candidate_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "digital_talent_role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate" ADD CONSTRAINT "candidate_opportunity_id_fkey" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_location" ADD CONSTRAINT "candidate_location_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_location" ADD CONSTRAINT "candidate_location_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_opportunity" ADD CONSTRAINT "candidate_opportunity_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_opportunity" ADD CONSTRAINT "candidate_opportunity_opportunity_id_fkey" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_skill" ADD CONSTRAINT "candidate_skill_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_skill" ADD CONSTRAINT "candidate_skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hiring_manager" ADD CONSTRAINT "hiring_manager_ministry_id_fkey" FOREIGN KEY ("ministry_id") REFERENCES "ministry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hiring_manager" ADD CONSTRAINT "hiring_manager_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity" ADD CONSTRAINT "opportunity_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "digital_talent_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity" ADD CONSTRAINT "opportunity_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity_location" ADD CONSTRAINT "opportunity_location_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity_location" ADD CONSTRAINT "opportunity_location_opportunity_id_fkey" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity_skill" ADD CONSTRAINT "opportunity_skill_opportunity_id_fkey" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opportunity_skill" ADD CONSTRAINT "opportunity_skill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
