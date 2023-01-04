"""Add columns for graph data

Revision ID: 8b594ed19f9d
Revises: 161e0f33603c
Create Date: 2023-01-04 07:23:38.528528

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '8b594ed19f9d'
down_revision = '161e0f33603c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('module_details', sa.Column('terraform_graph', sa.LargeBinary(length=16777215).with_variant(mysql.MEDIUMBLOB(), 'mysql'), nullable=True))
    op.add_column('module_details', sa.Column('graph_json', sa.LargeBinary(length=16777215).with_variant(mysql.MEDIUMBLOB(), 'mysql'), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('module_details', 'graph_json')
    op.drop_column('module_details', 'terraform_graph')
    # ### end Alembic commands ###
