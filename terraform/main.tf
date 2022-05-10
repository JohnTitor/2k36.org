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
  git_repository = {
    type = "github"
    repo = "JohnTitor/2k36.org"
  }
}

resource "vercel_project_domain" "twokthreesix" {
  project_id = vercel_project.with_next.id
  domain     = "www.2k36.org"
}

resource "vercel_project_domain" "twokthreesix_redirect" {
  project_id = vercel_project.with_next.id
  domain     = "2k36.org"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "twokthreesix_redirect2" {
  project_id = vercel_project.with_next.id
  domain     = "neet.club"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "twokthreesix_redirect3" {
  project_id = vercel_project.with_next.id
  domain     = "www.neet.club"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "twokthreesix_redirect4" {
  project_id = vercel_project.with_next.id
  domain     = "blog.neet.club"

  redirect             = vercel_project_domain.twokthreesix.domain
  redirect_status_code = 308
}
