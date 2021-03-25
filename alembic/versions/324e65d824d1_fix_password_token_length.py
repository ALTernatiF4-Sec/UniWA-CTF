"""fix password_token length

Revision ID: 324e65d824d1
Revises: 8fa7d8ac2b2f
Create Date: 2020-11-07 10:41:52.945898

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "324e65d824d1"
down_revision = "8fa7d8ac2b2f"
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column(
        "password_token",
        "value",
        existing_type=sa.VARCHAR(length=32),
        type_=sa.VARCHAR(length=64),
    )


def downgrade():
    op.alter_column(
        "password_token",
        "value",
        existing_type=sa.VARCHAR(length=64),
        type_=sa.VARCHAR(length=32),
    )
