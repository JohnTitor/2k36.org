terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

data "vercel_project_directory" "twokthreesix" {
  path = "./"
}

data "vercel_project" "twokthreesix" {
  name = "www2k36org"
}

resource "vercel_deployment" "twokthreesix" {
  project_id = data.vercel_project.twokthreesix.id
  files = data.vercel_project_directory.twokthreesix.files
  production = true
}

resource "vercel_project_domain" "twokthreesix" {
  project_id = data.vercel_project.twokthreesix.id
  domain = "www.2k36.org"
}

resource "vercel_project_domain" "twokthreesix_redirect" {
  project_id = data.vercel_project.twokthreesix.id
  domain     = "2k36.org"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "twokthreesix_redirect2" {
  project_id = data.vercel_project.twokthreesix.id
  domain     = "neet.club"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "twokthreesix_redirect3" {
  project_id = data.vercel_project.twokthreesix.id
  domain     = "www.neet.club"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "twokthreesix_redirect4" {
  project_id = data.vercel_project.twokthreesix.id
  domain     = "blog.neet.club"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}
