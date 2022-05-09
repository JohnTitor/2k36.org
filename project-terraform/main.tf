terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

provider "vercel" {

}

resource "vercel_project" "with_next" {
  name      = "www2k36org"
  framework = "nextjs"
}
