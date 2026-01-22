package handler

import (
	"github.com/pocketbase/pocketbase/core"
)

func Render(e *core.RequestEvent, status int) error {
	e.Response.WriteHeader(status)
	e.Response.Header().Set("Content-Type", "text/html")

	return e.Response.Write()
}
