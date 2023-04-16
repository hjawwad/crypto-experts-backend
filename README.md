## Node Version: `v14`
---
## API Docs
**Authorization Header Name:** `X-Access-Token`

**Endpoint:** `POST /api/register`
**Description:**
-- Register a user into the system --
**Payload:**
```json
{
	"name": "Dev Test",
	"email": "dev@test.com",
	"password": "12345678"
}
```

**Endpoint:** `POST /api/login`
**Description:**
-- Login to a user in the system --
**Payload:**
```json
{
	"email": "dev@test.com",
	"password": "12345678",
	"remember": true|false
}
```

**Endpoint:** `GET /api/groups`
**Description:**
-- Get all groups for the current user --

**Endpoint:** `POST /api/groups`
**Description:**
-- Create group for the current user --
**Payload:**
```json
{
	"name": "A test group",
	"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAYAAAB0ba1yAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEKExcne2z1KQAABEVJREFUWEft12uIFWUYB/Dfemk3tc1SiiS7kFFZGpbRBUwqhD50I5IoIiIrouhrTReCSmQiCKMLhBBURhEUaQYlGgRdhMDMyhbMohtbWVFauq176cMzc5ydnXP26gnCPwyz887zntn//7m+HMRBHMT/GS1DGYwH0uyelJ6La83GASeeakwuZTLaxR32YU/C3jr2GLtg40q8EcmUG3EVJuAnbMUmnI2bcCh6ZMSxG7/hB+xAB7Yl8a74u6MSYVyJ50g5FbOEJ3sFgcdwQcGsO7v+EgKcheMMRq8QY58Q5me8i3ewPqGrYs+QGBHxsrppeGkazsPVuASzK7a+hqNxJFZjGY5Fa8GmT0TDSNGB17Pra+wtilEvIoZFvKI4nSS8dyUuM5BAFdaKb81JmAtpCHU7ljTaiH78ip1CvBkNbDuxUUTEVnyRi1DmMCTxomIpZ+AOXIxT6m4ajC1Yj7txXcIrkDIRj+MGEQ1V6McfWINnBPk5WICFMiEr0IltIiVeTKKu1Pg0JJ4bpZGrK4WX2ofaVwc342EcgnMSvsu8Phf3YkqjzRmew9P4Soh2lHDASpxYZ08PduFtLMsjYBCBkofbRDivwmFl2xGiA4/gJXyIK4SIW7L7gcaPQoB9WDCgmJRIn4s3RFiOlTRR6S/FclEfXhUF7qNGm8YRvTgNx2DyxHy1RPpBPIl5g7aPDWcK1dfgeiwWffmEBnvGC3mKPpGwvoUBuTxVFKHzjS6Ph4sOvIw7RZ42C12YmtBXI5dGlVwnqmuXCI1dwiPtQpRJYrRsUy1MT8XapIq1vGevFmm0GNMr7Oohn/AmiOFopiia9Wy7RVVfmrA5lf3zWV++B9vxMXYkfF/cncZH5mA+LsRFor3l6MMKA0fKHtyKkwtrn+IF0ftbhcCtwvtDkd8pxtc+MdJOFS2trWCzW7Sy/NqCDxLep9DOssY+TRwM+pRQzP3S+mwxez+EIwTJ6Ql/l+yWiPTJMT/hs5LNPNFuZqmPDcIZ84SQh2frv2CzEPRzMdt3ojOJiK2hyGXEeVwqgi1ivl4nvD8zidAr2k8RneFyrEq4TQlpHFTWqk98F54Vs8AMvCe+uQHfiLDvTipSrZ7jqvKvIUo/0p/wbcpSMStX2e9JY+JahAeqbIaBdpwuUuH+JFIK9YnlqPduNIeCGrJOIIkqfZeKI2OGTcLjv1e8Gy4WiXowoMU2It0II/Z4FTLyG8vrmTBtSczateKC1oR/yvYFbBWh/KWoGT32H0+7G+wbNsZMPPd6AzyFWwohuRyPGky8RRxIrsWb6KnKWfZ/b7TebgpSOlOuyf5enNKVlgRPWZhGrViQPR9wjNnjw0Ab7ksjbJ8XoVvuJn+Ks/knQxWr8UIziPeJGf0t0fpqBY5afdgurqZhTFV9BJiA4w3j/N8sNMPjvcLrfYXn/vxlMaybEeI5mkF8hZjecrJ7BPn/FP8CFMQfknFKffkAAAAASUVORK5CYII="
}
```

**Endpoint:** `PUT /api/groups/:id`
**Description:**
-- Update group --
**Payload:**
```json
{
	"name": "A test group edited",
	"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAeCAYAAAB0ba1yAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEKExcne2z1KQAABEVJREFUWEft12uIFWUYB/Dfemk3tc1SiiS7kFFZGpbRBUwqhD50I5IoIiIrouhrTReCSmQiCKMLhBBURhEUaQYlGgRdhMDMyhbMohtbWVFauq176cMzc5ydnXP26gnCPwyz887zntn//7m+HMRBHMT/GS1DGYwH0uyelJ6La83GASeeakwuZTLaxR32YU/C3jr2GLtg40q8EcmUG3EVJuAnbMUmnI2bcCh6ZMSxG7/hB+xAB7Yl8a74u6MSYVyJ50g5FbOEJ3sFgcdwQcGsO7v+EgKcheMMRq8QY58Q5me8i3ewPqGrYs+QGBHxsrppeGkazsPVuASzK7a+hqNxJFZjGY5Fa8GmT0TDSNGB17Pra+wtilEvIoZFvKI4nSS8dyUuM5BAFdaKb81JmAtpCHU7ljTaiH78ip1CvBkNbDuxUUTEVnyRi1DmMCTxomIpZ+AOXIxT6m4ajC1Yj7txXcIrkDIRj+MGEQ1V6McfWINnBPk5WICFMiEr0IltIiVeTKKu1Pg0JJ4bpZGrK4WX2ofaVwc342EcgnMSvsu8Phf3YkqjzRmew9P4Soh2lHDASpxYZ08PduFtLMsjYBCBkofbRDivwmFl2xGiA4/gJXyIK4SIW7L7gcaPQoB9WDCgmJRIn4s3RFiOlTRR6S/FclEfXhUF7qNGm8YRvTgNx2DyxHy1RPpBPIl5g7aPDWcK1dfgeiwWffmEBnvGC3mKPpGwvoUBuTxVFKHzjS6Ph4sOvIw7RZ42C12YmtBXI5dGlVwnqmuXCI1dwiPtQpRJYrRsUy1MT8XapIq1vGevFmm0GNMr7Oohn/AmiOFopiia9Wy7RVVfmrA5lf3zWV++B9vxMXYkfF/cncZH5mA+LsRFor3l6MMKA0fKHtyKkwtrn+IF0ftbhcCtwvtDkd8pxtc+MdJOFS2trWCzW7Sy/NqCDxLep9DOssY+TRwM+pRQzP3S+mwxez+EIwTJ6Ql/l+yWiPTJMT/hs5LNPNFuZqmPDcIZ84SQh2frv2CzEPRzMdt3ojOJiK2hyGXEeVwqgi1ivl4nvD8zidAr2k8RneFyrEq4TQlpHFTWqk98F54Vs8AMvCe+uQHfiLDvTipSrZ7jqvKvIUo/0p/wbcpSMStX2e9JY+JahAeqbIaBdpwuUuH+JFIK9YnlqPduNIeCGrJOIIkqfZeKI2OGTcLjv1e8Gy4WiXowoMU2It0II/Z4FTLyG8vrmTBtSczateKC1oR/yvYFbBWh/KWoGT32H0+7G+wbNsZMPPd6AzyFWwohuRyPGky8RRxIrsWb6KnKWfZ/b7TebgpSOlOuyf5enNKVlgRPWZhGrViQPR9wjNnjw0Ab7ksjbJ8XoVvuJn+Ks/knQxWr8UIziPeJGf0t0fpqBY5afdgurqZhTFV9BJiA4w3j/N8sNMPjvcLrfYXn/vxlMaybEeI5mkF8hZjecrJ7BPn/FP8CFMQfknFKffkAAAAASUVORK5CYII="
}
```

**Endpoint:** `DELETE /api/groups/:id`
**Description:**
-- Delete group --

**Endpoint:** `GET /api/companies`
**Description:**
-- Get all companies --

**Endpoint:** `POST /api/companies`
**Description:**
-- Create company --
**Payload:**
```json
{
	"name": "Bitcoin",
	"icon": "data:image/png;base64,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"
}
```

**Endpoint:** `PUT /api/companies/:id`
**Description:**
-- Update company --
**Payload:**
```json
{
	"name": "Bitcoin edited",
	"icon": "data:image/png;base64,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"
}
```

**Endpoint:** `DELETE /api/companies/:id`
**Description:**
-- Delete company --

**Endpoint:** `GET /api/groups/:group_id/contacts`
**Description:**
-- Get all contacts for a group --

**Endpoint:** `POST /api/groups/:group_id/contacts`
**Description:**
-- Create contact for a group --
**Payload:**
```json
{
	"name": "John Doe",
	"image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIFBAMGB//EADAQAAIBAgMFBwMFAQAAAAAAAAABAgMEBRExEiEiQVETMnFygbHBJDNhIzRCUoIU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP1wAFQAAAAAAAAAAAANgQypLIAhsEMAeoAAAAAeF1dU7Zcbzk9IrUXtyrajtbnN7opmDOTnJyk25Pe29WB2VcTrzf6ajTXhmzx/7brXtpHOBg7qWJ14tdpszXhkaVtdUrlcDalzi9T58mMpQkpRbUlo0MH0zZVnPZ3KuaW0901ukj3AhkNhkMCGwQ2AOgAAACVqBhYnVdS7kuUOFfJyHpXedeo3rtv3PMoAAAQySrYHVhtXs7uKek+F/BtnzlBtV6eWu0vc+iZBDZVsllGwDYKsAdgAAAADAv6fZ3dRcm9pepzm1ids61NTgs5w6c0YogAEMoggEAdFjB1LumuSe0/Q3Gzjw23dGm5zXHPl0R1MgNlGyWVbAhgrJgDQAAAAkCDgvcPjWk6lFqM3qnoz1ur+lQbiuOa5R5eLM2pidxKWcdmK/rlmB4VqFWi2qlOUfzluPD1NSni/KrSfjFl3idvl3J5+VFGZSoVa326cpLrluNK0sI0mp1XtTWiWiPKri2f26T/0znjidxGWcnGS6NEGy3vKHNb31Ku9nuT6N6nQwIbKthso2AbBVsAagAAGbiV64t0aLyekpLl+Edd7W7C3lNd7SPifPt82wIIYbIKBAbIAjMhhkMCGaNheuTVGq83/ABk/YzWyrfQD6JvMo2eVrW7ehGb72kvEuyA2QQwBsABsDKxqfFSp/hsy2d+MP6qPkXuzgYgggEMoMhsNlQDZVslsowDKslsq2B34VPiqU+uUkd7Zl4W/qJeT5NNsgNggAbTKgAY2Mfuo+T5OAAQVZABRUhsACrZVsACrKgAdWGP6iXlNQAggkAD/2Q==",
	"company_id": "6435c99074190696cde1851d",
	"email": "test@test.com",
	"location": "test",
	"status": "Active",
	"job": "CTO",
	"phone": "0123456780"
}
```

**Endpoint:** `PUT /api/groups/:group_id/contacts/:id`
**Description:**
-- Update contact for a group --
**Payload:**
```json
{
	"name": "John Doe",
	"image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIFBAMGB//EADAQAAIBAgMFBwMFAQAAAAAAAAABAgMEBRExEiEiQVETMnFygbHBJDNhIzRCUoIU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP1wAFQAAAAAAAAAAAANgQypLIAhsEMAeoAAAAAeF1dU7Zcbzk9IrUXtyrajtbnN7opmDOTnJyk25Pe29WB2VcTrzf6ajTXhmzx/7brXtpHOBg7qWJ14tdpszXhkaVtdUrlcDalzi9T58mMpQkpRbUlo0MH0zZVnPZ3KuaW0901ukj3AhkNhkMCGwQ2AOgAAACVqBhYnVdS7kuUOFfJyHpXedeo3rtv3PMoAAAQySrYHVhtXs7uKek+F/BtnzlBtV6eWu0vc+iZBDZVsllGwDYKsAdgAAAADAv6fZ3dRcm9pepzm1ids61NTgs5w6c0YogAEMoggEAdFjB1LumuSe0/Q3Gzjw23dGm5zXHPl0R1MgNlGyWVbAhgrJgDQAAAAkCDgvcPjWk6lFqM3qnoz1ur+lQbiuOa5R5eLM2pidxKWcdmK/rlmB4VqFWi2qlOUfzluPD1NSni/KrSfjFl3idvl3J5+VFGZSoVa326cpLrluNK0sI0mp1XtTWiWiPKri2f26T/0znjidxGWcnGS6NEGy3vKHNb31Ku9nuT6N6nQwIbKthso2AbBVsAagAAGbiV64t0aLyekpLl+Edd7W7C3lNd7SPifPt82wIIYbIKBAbIAjMhhkMCGaNheuTVGq83/ABk/YzWyrfQD6JvMo2eVrW7ehGb72kvEuyA2QQwBsABsDKxqfFSp/hsy2d+MP6qPkXuzgYgggEMoMhsNlQDZVslsowDKslsq2B34VPiqU+uUkd7Zl4W/qJeT5NNsgNggAbTKgAY2Mfuo+T5OAAQVZABRUhsACrZVsACrKgAdWGP6iXlNQAggkAD/2Q==",
	"company_id": "6435c99074190696cde1851d",
	"email": "test@test.com",
	"location": "test",
	"status": "Active",
	"job": "CTO",
	"phone": "0123456780"
}
```

**Endpoint:** `DELETE /api/groups/:group_id/contacts/:id`
**Description:**
-- Delete contact for a group --

**Endpoint:** `GET /api/contacts/:contact_id/comments`
**Description:**
-- Get all comments for a contact --

**Endpoint:** `POST /api/contacts/:contact_id/comments`
**Description:**
-- Create comment for a contact --
**Payload:**
```json
{
	"comment": "This is a comment"
}
```

**Endpoint:** `PUT /api/contacts/:contact_id/comments/:id`
**Description:**
-- Update comment for a contact --
**Payload:**
```json
{
	"comment": "This is an edited comment"
}
```

**Endpoint:** `DELETE /api/contacts/:contact_id/comments/:id`
**Description:**
-- Delete comment for a contact --

**Endpoint:** `GET /api/contacts/:contact_id/interactions`
**Description:**
-- Get all interactions for a contact --

**Endpoint:** `POST /api/contacts/:contact_id/interactions`
**Description:**
-- Create interaction for a contact --
**Payload:**
```json
{
	"name": "Dev",
	"date": "2022-12-12",
	"location": "London",
	"description": "This is a description"
}
```

**Endpoint:** `PUT /api/contacts/:contact_id/interactions/:id`
**Description:**
-- Update interaction for a contact --
**Payload:**
```json
{
	"name": "Dev edited",
	"date": "2022-12-12",
	"location": "London",
	"description": "This is a description"
}
```

**Endpoint:** `DELETE /api/contacts/:contact_id/interactions/:id`
**Description:**
-- Delete interaction for a contact --

**Endpoint:** `GET /api/settings`
**Description:**
-- Get settings for a user --

**Endpoint:** `POST /api/settings`
**Description:**
-- Create settings for a user --
**Payload:**
```json
{
	"sidebar_heading": "Contact"
}
```