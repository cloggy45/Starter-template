terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.65.0"
    }
  }
  required_version = ">= 0.13"
}

provider "aws" {
  region = var.aws_region

  assume_role {
    role_arn = var.role_arn
  }
}

#terraform {
#  backend "s3" {
#    # config provided dynamically using `--backend-config` CLI parameters
#
#    # Skipping various checks to speed up backend initialisation
#    skip_credentials_validation = true
#    skip_metadata_api_check     = true
#    skip_region_validation      = true
#  }
#}